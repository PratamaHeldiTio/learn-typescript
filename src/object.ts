// tipe data object

// jika menggunakan seperti dibawah maka tipe data sestiap isi object otomatis menurut isinya, jika isi ulang harus sama isinya dan tipe data
let user = {
  name: 'heldi',
  age: 20
}

// error tidak ada age
// user =  {
//   name: 'tio',
// }

user =  {
  name: 'tio',
  age: 22,
}

// lebih mendefinisikan sebagai type

type Cus = {
  name: string,
  age: number,
  address: string
}

const cus: Cus = {
  name: 'heldi',
  age: 22,
  address: 'ini',
  // phone: '1232134'   // tidak bisa apabila tidak didefinisikan
}