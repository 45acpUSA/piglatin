//Pig Latin Translator


// const pigLatinConverter = str => {
//   let newStr = []
//   if (typeof str === "string"){
//     let strArr = str.split(" ")
//     strArr.forEach(word => {
//       if (/[aeiou]/i.test(word.charAt(0))){
//         newStr.push(`${word}-way`)
//       } else if (/qu/i.test(word)) {
//         let leadQu = word.indexOf(word.match(/[aeio]/i))
//         let noQu = word.substring(leadQu)
//         newStr.push(`${noQu}${word.substring(0, leadQu)}-ay`)
//       } else {
//         let leadCons = word.indexOf(word.match(/[aeiou]/i))
//         // leadCons is the index of the first vowel
//         let noCons = word.substring(leadCons)
//         //noCons is the substring of the word starting with the first vowel
//         newStr.push(`${noCons}${word.substring(0, leadCons)}-ay`)
//       }
//     })
//   } else {
//     alert(`Please input only text`)
//   }
//   return newStr.join(" ")
// }


//Refactored function using .map()
// const pigLatinConverter = str => {
//   if (typeof str === "string"){
//     let strArr = str.split(" ")
//     let translation = strArr.map(word => {
//       if (/[aeiou]/i.test(word.charAt(0))){
//         return `${word}-way`
//       } else if (/qu/i.test(word)) {
//         let leadQu = word.indexOf(word.match(/[aeio]/i))
//         let noQu = word.substring(leadQu)
//         return `${noQu}${word.substring(0, leadQu)}-ay`
//       } else {
//         let leadCons = word.indexOf(word.match(/[aeiou]/i))
//         // leadCons is the index of the first vowel
//         let noCons = word.substring(leadCons)
//         //noCons is the substring of the word starting with the first vowel
//         return `${noCons}${word.substring(0, leadCons)}-ay`
//       }
//     })
//     return translation.join(" ")
//   } else {
//     alert(`Please input only text`)
//   }
// }

//**Pig Latin Converter for HTML**
// const pigLatinConverter = () => {
//   let str = document.getElementById("userInput").value
//   let newStr = []
//   if (!/[0123456789]/.test(str.valueOf())){
//     let strArr = str.split(" ")
//     strArr.forEach(word => {
//       if (/[aeiou]/i.test(word.charAt(0))){
//         newStr.push(`${word}-way`)
//       } else if (/qu/i.test(word)) {
//         let leadQu = word.indexOf(word.match(/[aeio]/i))
//         let noQu = word.substring(leadQu)
//         newStr.push(`${noQu}${word.substring(0, leadQu)}-ay`)
//       } else if (word === ""){
//         newStr.push(`Your translation here`)
//       } else {
//         let leadCons = word.indexOf(word.match(/[aeiou]/i))
//         let noCons = word.substring(leadCons)
//         newStr.push(`${noCons}${word.substring(0, leadCons)}-ay`)
//       }
//     })
//   } else {
//     alert(`Please input only text`)
//   }
//   document.getElementById("translation").innerHTML = newStr.join(" ")
// }

// //*****Refactored Pig Latin Function for HTML*****
// const pigLatinConverter = () => {
//   let str = document.getElementById("userInput").value
//   if (!/[0123456789]/.test(str.valueOf())){
//     let strArr = str.split(" ")
//     let translation = strArr.map(word => {
//       let startAtVowel = word.indexOf(word.match(/[aeiou]/i))
//       if (/[aeiou]/i.test(word.charAt(0))){
//         return `${word}-way`
//       } else if (/qu/i.test(word)) {
//         let leadQu = word.indexOf(word.match(/[aeio]/i))
//         if (/[!%^&*?.,:;]/.test(word)) {
//           let quEndSpecSym = word.indexOf(word.match(/[!%^&*?.,:;]/i))
//           return `${word.substring(leadQu, quEndSpecSym)}${word.substring(0, leadQu)}-ay${word.substring(quEndSpecSym)}`
//         } else if (/[@#$]/.test(word)) {
//           return `${word.charAt(0)}${word.substring(leadQu)}${word.substring(1, leadQu)}-ay`
//         } else if (/[()""''``]/.test(word)) {
//           return `${word.charAt(0)}${word.substring(leadQu, (word.length-1))}${word.substring(1, leadQu)}-ay${word.substring((word.length-1))}`
//         } else {
//           return `${word.substring(leadQu)}${word.substring(0, leadQu)}-ay`
//         }
//       } else if (word === "") {
//         return `Your translation here`
//       } else if (/[!%^&*?.,:;]/.test(word)) {
//         let endSpecSym = word.indexOf(word.match(/[!%^&*)?.,]/))
//         return `${word.substring(startAtVowel, endSpecSym)}${word.substring(0, startAtVowel)}-ay${word.substring(endSpecSym)}`
//       } else if (/[@#$]/.test(word)) {
//         return `${word.charAt(0)}${word.substring(startAtVowel)}${word.substring(1, startAtVowel)}-ay`
//       } else if (/[()""''``]/.test(word)) {
//         return `${word.charAt(0)}${word.substring(startAtVowel, (word.length-1))}${word.substring(1, startAtVowel)}-ay${word.substring((word.length-1))}`
//       } else {
//         return `${word.substring(startAtVowel)}${word.substring(0, startAtVowel)}-ay`
//       }
//     })
//     document.getElementById("translation").innerHTML = translation.join(" ")
//   } else {
//     alert(`Please input only text`)
//   }
// }

// console.log(pigLatinConverter("if this code works then it will correctly output words like quiet squeal and sun"))





//**********COMPLETE REFACTOR - EXPLODE INTO SMALLER FUNCTIONS**************

//userInput
// let str = document.getElementById("userInput").value
// let str = "let us make sure that this will still work (air) i get my berrings straight"

//split userInput into an array
// let strArr = str.split(" ")

//if word starts with a consonant with no qu. finds first vowel
// let firstVowel = val.indexOf(val.match(/[aeiou]/i))

const firstVowel = val => val.indexOf(val.match(/[aeiou]/i))

//index position of ending special char
// const endSpecSym = val.indexOf(val.match(/[!%^&*)?.,]/))

const endSpecSym = val => val.indexOf(val.match(/[!%^&*)?.,]/))

//index position of first vowel after the qu fragment
// const leadQu = val.indexOf(val.match(/[aeio]/i))

const vowelAfterQu = val => val.indexOf(val.match(/[aeio]/i))

const firstY = val => val.indexOf(val.match(/y/))

//if word begins with a vowel
const vowel = val => {
  if (/[!%^&*?.,:;]/.test(val)) {
    return vowPunc(val)
  } else if (/[@#$]/.test(val)) {
    return vowLeadSpec(val)
  } else if (/[()""''``]/.test(val)) {
    return vowEncap(val)
  } else {
    return `${val}-way`
  }
}

//if word begins with a vowel && has ending special char
const vowPunc = val => {
  return `${val.substring(firstVowel(val), endSpecSym(val))}${val.substring(0, firstVowel(val))}-way${val.substring(endSpecSym(val))}`
}

//if word begins with vowel && has leading special char
const vowLeadSpec = val => {
  return `${val.charAt(0)}${val.substring(firstVowel(val))}${val.substring(1, firstVowel(val))}-way`
}

//if word begins with vowel && is encapsulated by special char
const vowEncap = val => {
  return `${val.charAt(0)}${val.substring(firstVowel(val), (val.length-1))}-way${val.substring((val.length-1))}`
}


//if word begins with a consonant
const consonant = val => {
  if (/[!%^&*?.,:;]/.test(val)) {
    return conPunc(val)
  } else if (/[@#$]/.test(val)) {
    return conLeadSpec(val)
  } else if (/[()""''``]/.test(val)) {
    return conEncap(val)
  } else {
    return `${val.substring(firstVowel(val))}${val.substring(0, firstVowel(val))}-ay`
  }
}

//if word begins with consonant && has ending special char
const conPunc = val => {
  return `${val.substring(firstVowel(val), endSpecSym(val))}${val.substring(0, firstVowel(val))}-ay${val.substring(endSpecSym(val))}`
}

//if word begins with consonant && has leading special char
const conLeadSpec = val => {
  return `${val.charAt(0)}${val.substring(firstVowel(val))}${val.substring(1, firstVowel(val))}-ay`
}

//if word begins with consonant && is encapsulated by special char
const conEncap = val => {
  return `${val.charAt(0)}${val.substring(firstVowel(val), (val.length-1))}${val.substring(1, firstVowel(val))}-ay${val.substring((val.length-1))}`
}

//if word has qu, regardless of another leading consonant, determine if any other special conditions
const hasQu = val => {
  if (/[!%^&*?.,:;]/.test(val)) {
    return quPunct(val)
  } else if (/[@#$]/.test(val)) {
    return quLeadSpec(val)
  } else if (/[()""''``]/.test(val)) {
    return quEncap(val)
  } else {
    return `${val.substring(vowelAfterQu(val))}${val.substring(0, vowelAfterQu(val))}-ay`
  }
}

//if word has qu && has ending special char
const quPunct = val => {
  let quEndSpecSym = val.indexOf(val.match(/[!%^&*?.,:;]/i))
  return `${val.substring(vowelAfterQu(val), quEndSpecSym)}${val.substring(0, vowelAfterQu(val))}-ay${val.substring(quEndSpecSym)}`
}

//if word has qu && has leading special char
const quLeadSpec = val => {
  return `${val.charAt(0)}${val.substring(vowelAfterQu(val))}${val.substring(1, vowelAfterQu(val))}-ay`
}

//if word has qu && is encapsulated by special char
const quEncap = val => {
  return `${val.charAt(0)}${val.substring(vowelAfterQu(val), (val.length-1))}${val.substring(1, vowelAfterQu(val))}-ay${val.substring((val.length-1))}`
}


const yAsVowel = val => {
  if (/[!%^&*?.,:;]/.test(val)) {
    return yPunc(val)
  } else if (/[@#$]/.test(val)) {
    return yLeadSpec(val)
  } else if (/[()""''``]/.test(val)) {
    return yEncap(val)
  } else {
    return `${val.substring(firstY(val))}${val.substring(0, firstY(val))}-ay`
  }
}

const yPunc = val => {
  return `${val.substring(firstY(val), endSpecSym(val))}${val.substring(0, firstY(val))}-ay${val.substring(endSpecSym(val))}`
}

const yLeadSpec = val => {
  return `${val.charAt(0)}${val.substring(firstY(val))}${val.substring(1, firstY(val))}-ay`
}

const yEncap = val => {
  return `${val.charAt(0)}${val.substring(firstVowel(val), (val.length-1))}${val.substring(1, firstVowel(val))}-ay${val.substring((val.length-1))}`
}

//translates the text by determining the characteristics of each word and translating it based on the rules
const translator = () => {
  let str = document.getElementById("userInput").value
  let strArr = str.split(" ")
  let translation = strArr.map(word=>{
    if (/[aeiou]/i.test(word.charAt(0)) || (/\W/.test(word.charAt(0)) && /[aeiou]/i.test(word.charAt(1)))) {
      return vowel(word)
    } else if (/qu/i.test(word)) {
      return hasQu(word)
    } else if (word === "") {
      return `Your translation will appear here`
    } else if (/[0123456789]/.test(word)) {
      return word
    } else if (!/[aeiou]/i.test(word)) {
      return yAsVowel(word)
    } else {
      return consonant(word)
    }
  })
  document.getElementById("translation").innerHTML = translation.join(" ")
}

// console.log(translate())
