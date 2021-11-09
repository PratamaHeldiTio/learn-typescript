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

let isobj: object = {ds: 'dfdf'}

// any , type data any ini merupakan type data yang mengabaikan sifat typescript yang ketat tipe data, iya akan menjadi layaknya javascript yang bisa memasukan semua type data

let random: any = 'nama'
// no error
random = 20
random = {nama: 'heldi'}
random = [1,2,3,4]
random  = true || false || 'striing'

/* array cara definisi let varname: typedate[], 
nilai array selain tipe data error */
let array: number[]
array = [1]
// error
// array = ['dads']
let array2: string[]
array2 = ['rer']

/* tuple, merupakan tipe data seperti array namun lebih ketat
tuper hanya bisa diisni dengan banyak dan tipe data yang telah dideklarasikan
ketika panjang kurang atau lebih atau tipe datanya tidak cocok sesuai posisi
makan akan error tupel = panjang posisi tipe data must match*/
let tupelMe: [number, number, string, boolean] = [1, 8, 'true', true]
tupelMe = [1, 2, '3', false]

//error
// tupelMe = [1,2, 'fdf']
// tupelMe =[1,2, '3', true, 4]
// tupelMe = [2, 's', true, 3]
   
/* enum dibutuhkan untuk data yang sudah fix
sifat enum
- emnum tidak bisa diasign ulang akan otomatis readonly
- memiliki sturktur seperti object namun menggunakan
- ketika enum didefiniskan tanpa pasangan otomatis yang pertama 0
- jika psangan seblmnya number maka pasangan setelah otomatis increment jika tidak memiliki pasangan
- ketika ada psangan yang menggunakan string maka wajb setelahnya memiliki pasangan, sampai ada yg memili pasangan number maka pasangan setelah number kembali increment
-akan error/undifined jika ada enum meliki pasangan string namun setelah tidak ada pasangan
- walaupun memiliki stukture seperti obj, tetapi pada enum mau sebelah kanan atau kiri bisa menjadi key dan value
- pasngan enum hanya bisa menggunakan string and number
- sebelah kiri otomatis membentuk string tanpa kutip dann tidak boleh menggunakan nimber
- sebelah kanan jika ingin string harus mengguankan kutip
- jika kita ingin akses nilai bagian kiri berdasarkan nilai kanan, maka jika ada bagian kanan number otomatis membentuk string*/

enum month {
  jan,
  feb,
  mar
}

enum month1 {
  jan = 10,
  feb = 100,
  mar = 'string',
  apr = 1,
  mai,
  jun = 6
}

// month1.jan = 12000
console.log(month1)


// type data union, atau tipe data yang bisa dimasukan lebih dari satu namun bukan berarti semunya seperti any

let phone: string | number | boolean;
phone = 4342342
phone = '44245354'
phone = true
// phone = { id: 'fdfd'}    // error karna obj tidak terdaftar