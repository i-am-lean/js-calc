class Calc {
    static #value = ''

    static #NAME = 'calc'

    static #isDot = false //стоїть вже крапка або ні

    static add = (newValue) => {
        if (isNaN(this.#value[this.#value.length - 2])) {
            if (Number(this.#value[this.#value.length - 1]) === 0 && this.#isDot == false
            ) {
                return null
            }
        } //щоб була змога використовувати правильно написані десяткові дроби

        console.log(this.#value)

        this.#value = this.#value.concat(newValue) //до кінця нашого value додаємо нове value

        this.#output() // вивести на екран
    }

    static #output = () => {
        this.#save()
        window.output.innerHTML = this.#value //взаємодія з екраном
    }

    static dot = () => {
        if(this.#isDot) {
           return null
        }

        if (isNaN(this.#value[this.#value.length - 1])) {
            return null
        } //впорядковує точку (щоб стояла тільки одна, уникнути двох крапок в одному числі або наявності крапки без числа) 

        this.#value = this.#value.concat('.')

        this.#output() //щоб вивело на екрані оновлення

        this.#isDot = true
    }

    static op = (opValue) => {
        if(isNaN(this.#value[this.#value.length - 1])) {
            return null
        } //впорядковує знаки (щоб додавався тільки один)


        this.#value = this.#value.concat(opValue)

        this.#output()
        this.#isDot = false
    }

    static reset = () => {
        this.#value = ''
        this.#output()
        this.#isDot = false
        
    }

    static result = () => {
        this.#value = String(eval(this.#value))
        this.#output()
    }

   static #save = () => {
    window.localStorage.setItem(this.#NAME, this.#value)
   }

   static #load = () => {
    this.#value =
    window.localStorage.getItem(this.#NAME) || ''
   }

   static init = () => {
    this.#load()
    this.#output()
    console.log('Calc is init')
   }
}

Calc.init()

window.calc = Calc