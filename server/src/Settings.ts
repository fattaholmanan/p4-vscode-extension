// The example settings
export interface P4ExtensionSettings {
  maxNumberOfProblems: number;
  compilerServerAddress: string;
  usernamePassword?: UseramePassword;
  autoUserNamePassword: boolean;
  userRememberToken?: string;
  useRemoteServer: boolean;
}

interface UseramePassword {
  username: string;
  password: string;
}

export const defaultSettings: P4ExtensionSettings = {
  maxNumberOfProblems: 100,
  compilerServerAddress: "",
  autoUserNamePassword: false,
  useRemoteServer: false,
};
