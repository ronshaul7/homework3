const form = document.getElementById("create-visitor-form"); //נייבא את הטופב ונשמור במשתנה

function createNewVisitor(event) {
  // ביטול התנהגות דיפולטיבית של שליחת טופס
  // קראו עוד כאן: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  event.preventDefault();
  const name = event.elements["user-name"];
  const coins = event.elements["user-coins"];
  //נוודא שהוזנו ערכים בשדות
  const validateFormInputs = () => {
    if (name === "" || coins === "") {
      console.log("Please enter a valid name and coins amount.");
      return false;
    }
    return true;
  }

  //מקבל שם ומחזיר אם האורח קיים
    const visitorExists = (name) => {
      for (let i = 0; i < visitors.length; i++) {
        if (visitors[i].name === name) {
          console.log("user already exists")
        }
      }
    };
    //מקבל שם, בודק שאין אותו כבר במערך האורחים ומחזיר אובייקט אורח
    const makeVisitor = (name) => {
        for (let i = 0; i < visitors.length; i++) {
          if (visitors[i].name === name) {
            return visitors[i];
          }
        }
    }

  const user = {
    name: name.value,
    coins: coins.value,
  };

  visitors.push(user);
  localStorage.setItem("visitors", JSON.stringify(visitors));//שמירה בלוקאל סטורג'

 


  /**
  צרו אורח חדש כאן 👇
  ניתן לפצל את הלוגיקה למספר בלתי מוגבל של פונקציות.
  כמו שיותר מפוצל וטהור - פונקציות עם מטרה יחידה ושם משמעותי שמסביר מה הפונקציה עושה ומחזירה
  דוגמא:

  const validateFormInputs = () => {
    בודק האם האינפוטים קיימים ויש בהם ערך
    מחזיר האם תקין או לא (בוליאני)
  }

  const visitorExists = (name) => {
    מקבל שם ומחזיר תשובה האם השם האורח קיים
  }

  const makeVisitor = (name) => {
    מקבל שם, בודק שאין אותו כבר במערך האורחים ומחזיר אובייקט אורח
  }
  **/
}

/**************************************
  מימשתי עבורכם את ההאזנה לאירוע שליחת טופס
  שימו לב כי האיידי של createForm
  זהה לאיידי של הטופס בעמוד signup.html
  אין לשנות אותו */
const createForm = document.getElementById("create-visitor-form");
if (createForm) {
  createForm.addEventListener("submit", createNewVisitor);
}
