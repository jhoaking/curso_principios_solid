(() => {
  //  aplicando el prncipio de responsabilidad unica
  // priorizar la composicion frente a la herencia

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
  }

  class User {
    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
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

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      name,
      genre,
      birthdate,
      email,
      role,
      workingDirectory,
      lastOpenFolder,
    }: UserSettingsProps) {
      this.person = new Person({ name, genre, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ workingDirectory, lastOpenFolder });
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
