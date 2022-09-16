class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[];
  private _worksGrades: number[];

  constructor(enrollment: string, name: string, examsGrades: number[], worksGrades: number[]) {
    if (examsGrades.length != 4 || worksGrades.length != 2) {
      throw new Error("Invalid number of grades");
    }
    this._enrollment = enrollment;
    this._name = name;
    this._examsGrades = examsGrades;
    this._worksGrades = worksGrades;
  }

  public get enrollment(): string {
    return this._enrollment;
  }
  public set enrollment(value: string) {
    this._enrollment = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get examsGrades(): number[] {
    return this._examsGrades;
  }
  public set examsGrades(value: number[]) {
    if (value.length != 4) {
      throw new Error("Person must have 4 values of exam grades");
    }
    this._examsGrades = value;
  }

  public get worksGrades(): number[] {
    return this._worksGrades;
  }
  public set worksGrades(value: number[]) {
    if (value.length != 2) {
      throw new Error("Person must have 2 values of work grades");
    }
    this._worksGrades = value;
  }

  // calcula a soma das notas da pessoa
  public sumGrades(): number {
    // let sum = 0;
    // for (let i = 0; i < this._examsGrades.length; i++) {
    //   sum += this._examsGrades[i];
    // }
    // for (let i = 0; i < this._worksGrades.length; i++) {
    //   sum += this._worksGrades[i];
    // }
    // return sum;

    // solução com reduce1
    return [...this._examsGrades, ...this._worksGrades]
      .reduce((sum, grade) => sum + grade);

    // solução com reduce2
    // return [...this._examsGrades, ...this._worksGrades]
    //   .reduce((sum, grade) => {
    //     sum += grade
    //     return sum;
    //   }, 0);
  }

  // calcula a média das notas da pessoa arredondando o resultado
  public averageGrades(): number {
    return Math.round(this.sumGrades() / (this._examsGrades.length + this._worksGrades.length));
  }
}

const student1 = new Student("123456", "John Doe", [6, 7, 5, 8], [6, 9]);
console.log(student1);
console.log('Soma das notas: ', student1.sumGrades());
console.log('Média das notas: ', student1.averageGrades());

const student2 = new Student("654321", "Jhonny Joy", [10, 10, 10, 10], [10, 10]);
console.log(student2);
console.log('Soma das notas: ', student2.sumGrades());
console.log('Média das notas: ', student2.averageGrades());