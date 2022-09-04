interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void
}

class RealA implements A {
    a(): void {}
}

class RealB implements A, B {
    a(): void{}
    b(): void{}
}

class RealABC implements ABC {
    a(): void{}
    b(): void{}
    c(): void{}
}

abstract class RealABD implements A, B {
    a(): void{};
    b(): void{};
    abstract d(): void;
}