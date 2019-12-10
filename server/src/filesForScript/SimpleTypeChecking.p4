//input
const bit<32> x = 2;
bool test;

if (x == test){
    const bit<32> y = 5;
}

//output
/*

Should output an error at line 5, since types of x and test are not the same.

*/