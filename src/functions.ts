// ketika function ditentukan return string maka harus string 
function getName(): string {
  return 'adsadas'
}

function getAge(): number {
  return 123
}

function isDead(): boolean {
  return false
}

// ketika function tidak ada kembalian berikan void dan jika ada return maka error

function funcvoid(): void {
  let angka: number = 5 + 5
  // return angka
}

// ketika tidak diberi type data maka akan kembali seperti javascript, kalau begitu knpa ga pake bambang 

function noType() {
  return 'ini mau return apapu dan ga return gakan error'
}
console.log(funcvoid())

// type date argument = fuction (argumen: tipe data)

const perkalian = (valueA: number, valueB: number): number => { 
  return valueA * valueB
}

console.log(perkalian(4, 4))

// console.log(perkalian(4, 'hfgh'))   // eerror / NaN


// function as type custom type

// type Add = (valA: number, valB: number) => number

// const add: Add = (valA: number, valB: number) => {
//   return valA + valB
// }


// default parameter, jika kita menggunakan default parameter maka ketika kita tidak menetapkan argumen maka tidak eror melainkan otomatis default parameter digunakan
const edd = (valA: number, valB: number = 5): number => {
  return valA + valB
}

console.log(edd(2, 6))
console.log(edd(2))

// optional parameter menggunakan tanda ?
// ketika parameter tidak diisi dengan argument dia tidak error namun parameter berisi undefined
// yang perlu diperhatikan menggunakan optional parameter ketika return value number akan terjadi error karena undefined tidak bisa ditambahkan dengan number

const addFamilyAge = (valA: number, valB?: number): string => {
  return valA + " " + valB
}

console.log(addFamilyAge(22, 223))
