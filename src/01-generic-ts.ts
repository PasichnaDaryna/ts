
/*
 * Generics (обобщения, обобщённые типы, дженерики)
 *  Думайте о дженериках как о аргументе функции, в котором вы указываете тип других аргументов
 *
 * - [Обобщённые типы](https://canonium.com/articles/typescript-generics)
 */

/*
 * Дженерик-функции с одним параметром
 *  - any[] и потеря типизации
 *  - Добавляем дженерик для аргумент-типа
 *  - Как ТС выводит типы и как указать явно foo<тип>()
 */

const isEqual = <T, Y>(a: T, b: Y) => {
    return Object.is(a, b);
};





export { }