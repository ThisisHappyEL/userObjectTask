// Изначально образованный объект
const UserProfileManager = {
  users: [
    { id: 12345, name: 'Гавриил', email: 'edem@mail.ru'},
  ]
};

// Функция для создания случайного ID
const newID = () => {
  randomID = Math.round(Math.random() * 100000);
  return randomID;
};

// Функция для создания нового пользователя
const addUser = (name, email) => {
  id = newID();
  UserProfileManager.users.push({ id, name, email });
};

// Проверка работы
console.log('Создаём нового пользователя и проверяем что поменялось')
addUser('Уриил', "Iriy@mail.ru")
console.log(UserProfileManager);

// Функия для удаления пользователя по id с помощью ФВП "filter"
const removeUser = (userID) => {
  UserProfileManager.users = UserProfileManager.users.filter((user) => user.id !== userID)
};

// Проверка работы
console.log('\nИзбавимся от Гавриила по его незамысловатому Айди')
removeUser(12345);
console.log(UserProfileManager);

// Функция для изменения данных о пользователе
const updateUser = (userID, newInfo) => {
  UserProfileManager.users = UserProfileManager.users.reduce((acc, user) => {
    if (!user.id === userID) {
      acc.push(user)
    } else {
      acc.push({ id: userID, ...newInfo})
    }
    return acc
  }, [])
};

// Проверка работы
console.log('\nЗаменим Уриила на Белобога и чуток подправим Емейл')
updateUser(13951, { name: 'Белобог' , email: 'IriyDalniy@mail.ru'});
console.log(UserProfileManager);

// Функция для поиска пользователя по имени или его фрагменту
const findUserByName = (name) => {
  for (let i = 0; i < UserProfileManager.users.length; i += 1) {
    if (UserProfileManager.users[i].name.startsWith(name)) {
      return UserProfileManager.users[i];
    }
  }
  return 'Отбой, не нашёл'
};

// Проверка работы
console.log('\nИщем пользователя Белобог по "Бел"')
console.log('Но Перед этим для чистоты эксперимента добавим ещё интересных персонажей')
addUser('Сет', "Amenty@mail.ru")
addUser('Аид', "Styx@mail.ru")
console.log(findUserByName('Бел'));

// Функция, возвращающая массив всех пользователей
const getAllUsers = () => UserProfileManager.users;

//Проверка работыэ
console.log('\nВыведем наш пантеон в консоль')
console.log(getAllUsers())