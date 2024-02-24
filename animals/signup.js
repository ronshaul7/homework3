const form = document.getElementById("create-visitor-form"); //נייבא את הטופב ונשמור במשתנה

function createNewVisitor(event) {
  // ביטול התנהגות דיפולטיבית של שליחת טופס
  // קראו עוד כאן: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  event.preventDefault();
  const name = event.target.elements["user-name"].value;
  const coins = event.target.elements["user-coins"].value;
  
  //נוודא שהוזנו ערכים בשדות
  const validateFormInputs = () => {
    const name = document.getElementById("user-name").value;
    const coins = document.getElementById("user-coins").value;
  
    if (name === "" || coins === "") {
      const errorMessage = document.createElement('div');
      errorMessage.textContent = "Please enter a valid name and coins amount.";
      document.body.appendChild(errorMessage);
      return false;
    }
    return true;
  }

  if (!validateFormInputs()) {
    return; // אם הקלט לא תקין, תפסיק את הריצה של הפונקציה כאן
  }
  
  //מקבל שם ומחזיר אם האורח קיים
  const visitorExists = (name) => {
    for (let i = 0; i < visitors.length; i++) {
      if (visitors[i].name === name) {
        return true;
      }
    }
    return false;
  };
//הודעת שגיאה אם מבקר קיים
if (visitorExists(name)) {
  const errorMessage = document.createElement('div');
  errorMessage.textContent = "User already exists";
  document.body.appendChild(errorMessage);
  return; // עצור כאן ואל תמשיך להעביר לדף נוסף
}

  
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
  window.location.href="login.html";//מעביר לדף מבקרים 

 }


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


/**************************************
  מימשתי עבורכם את ההאזנה לאירוע שליחת טופס
  שימו לב כי האיידי של createForm
  זהה לאיידי של הטופס בעמוד signup.html
  אין לשנות אותו */
const createForm = document.getElementById("create-visitor-form");
if (createForm) {
  createForm.addEventListener("submit", createNewVisitor);
}
