(() => {
  // no aplicando el prncipio de responsabilidad unica

  type Genre = "M" | "F";

  interface PersonProps {
    name: string;
    genre: Genre;
    birthdate: Date;
  }

  class Person {
    public name: string;
    public genre: Genre;
    public birthdate: Date;

    constructor({ name, genre, birthdate }: PersonProps) {
      this.name = name;
      this.genre = genre;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
    name: string;
    genre: Genre;
    birthdate: Date;
  }

  class User extends Person {
    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ email, role, name, genre, birthdate }: UserProps) {
      super({ name, genre, birthdate });
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
    email: string;
    role: string;
    name: string;
    genre: Genre;
    birthdate: Date;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      genre,
      birthdate,
    }: UserSettingsProps) {
      super({
        email,
        role,
        name,
        genre,
        birthdate,
      });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSetting = new UserSettings({
    workingDirectory: "/user/home",
    lastOpenFolder: "/home",
    email: "pepeto@gmail.com",
    role: "Admin",
    name: "joaco",
    genre: "M",
    birthdate: new Date("2006-06-09"),
  });
  console.log({ userSetting });
})();
