// Exercises modern P4_16 grammar constructs (no preprocessor directives).
// Used to validate grammar/P4.g4. This is a syntax-only fixture.

const bit<8> A = 0x0a;
const int B = 8w10;

typedef bit<48> macAddr_t;
type bit<32> IPv4Address;

struct empty_t { }

header ethernet_t {
    macAddr_t dstAddr;
    macAddr_t srcAddr;
    bit<16>   etherType;
}

header_union ip_t {
    ethernet_t eth;
}

struct headers {
    ethernet_t ethernet;
}

struct point_t {
    bit<8> x;
    bit<8> y;
}

const point_t ORIGIN = { x = 8w0, y = 8w0 };
const point_t ONES = { 8w1, 8w1 };

enum E { A1, B1, C1 }
enum bit<8> EB { X = 1, Y = 2, }

error { SomeError, AnotherError }

match_kind { exact, ternary, lpm }

extern Checksum<T> {
    Checksum();
    void update(in T data);
    abstract bit<16> get();
}

extern void log_msg(string msg);

@deprecated("use bar")
@pure
@MyStructured[1, 2, 3]
@MyKv[a = 1, b = 2]
control C(inout headers hdr) {
    bit<16> tmp;
    list<bit<8>> myList = { 1, 2, 3 };

    action drop_action() { }
    action set_val(bit<16> v) { tmp = v; }

    table t {
        key = {
            hdr.ethernet.etherType : exact;
            hdr.ethernet.srcAddr   : ternary;
        }
        actions = {
            drop_action;
            set_val;
        }
        const default_action = drop_action();
        size = 1024;
        const entries = {
            0x0800 &&& 0xFFFF : set_val(1);
            priority = 10 : 0x0806 : drop_action();
            default : drop_action();
        }
    }

    apply {
        tmp = 16w0;
        if (hdr.ethernet.etherType == 16w0x0800) {
            t.apply();
        } else {
            drop_action();
        }
        switch (t.apply().action_run) {
            set_val: { tmp = 1; }
            default: { }
        }
    }
}

parser P(packet_in pkt, out headers hdr) {
    state start {
        pkt.extract(hdr.ethernet);
        transition select(hdr.ethernet.etherType) {
            0x0800           : parse_done;
            0x0806 .. 0x0810 : accept;
            _                : reject;
        }
    }
    state parse_done {
        transition accept;
    }
}

control Pipe<H>(inout H hdr);
package Switch<H>(Pipe<H> p);
