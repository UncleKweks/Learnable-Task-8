class Telephone {
  constructor() {
    this.phoneNumbers = [];
    this.observers = [];
  }

  addPhoneNumber(phoneNumber) {
    this.phoneNumbers.push(phoneNumber);
  }

  removePhoneNumber(phoneNumber) {
    const index = this.phoneNumbers.indexOf(phoneNumber);
    if (index !== -1) {
      this.phoneNumbers.splice(index, 1);
    }
  }

  dialPhoneNumber(phoneNumber) {
    if (this.phoneNumbers.includes(phoneNumber)) {
      this.observers.forEach((observer) => observer.notify(phoneNumber));
    }
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }
}

class PhoneNumberObserver {
  notify(phoneNumber) {
    console.log(phoneNumber);
  }
}

class DialingObserver {
  notify(phoneNumber) {
    console.log("Now Dialing", phoneNumber);
  }
}

const telephone = new Telephone();

const phoneNumberObserver = new PhoneNumberObserver();
const dialingObserver = new DialingObserver();

telephone.addObserver(phoneNumberObserver);
telephone.addObserver(dialingObserver);

telephone.addPhoneNumber("2347023232");
telephone.dialPhoneNumber("2347023232");

telephone.removeObserver(dialingObserver);

telephone.dialPhoneNumber("2347023232");
