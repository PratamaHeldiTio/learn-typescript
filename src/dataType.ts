// penulisan const variableName: dataType = value
// atau const variableName = value
// jika tidak ada datatype maka akan otomatis menggunakan datatype pertama
// contoh const name = 'heldi' sama dengan const name: string = 'heldi'



// string
let nama: string = 'heldi tio'

// nama tidak bisa diisi integer karna type datanya string
// nama = 20

//Nnumber (int float, dll)
let age: number = 20
// error
// age = '1/2'

// boolean
let isTyping: boolean = true
// error
// isTyping = 'false'

// any , type data any ini merupakan type data yang mengabaikan sifat typescript yang ketat tipe data, iya akan menjadi layaknya javascript yang bisa memasukan semua type data

let random: any = 'nama'
// no error
random = 20
random = {nama: 'heldi'}
random = [1,2,3,4]
random  = true || false || 'striing'
console.log(random)