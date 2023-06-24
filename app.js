class Cab {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.isAvailable = true;
    }
  
    updateLocation(x, y) {
      this.x = x;
      this.y = y;
    }
  }
  
  class Rider {
    constructor(name, email, phone, password) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.password = password;
      this.rides = [];
    }
  
    startRide(cab, startingX, startingY, destinationX, destinationY);
    endRide(cab);
    getRidesHistory();
  
  }
  
  class Cab {
    constructor(lx, y) {
      this.x = x;
      this.y = y;
      this.isAvailable = true;
    }
  
    updateLocation(x, y);
    
  }
  
  class Driver {
      constructor(name, email, phone, cab, password) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.cab = cab;
        this.isAvailable = true;
      }
    
      changeAvailability();
  
    }
  
  
    class Ride {
      constructor(rider, driver, startingX, startingX, destinationX, destinationY, startTime, endTime) {
        this.rider = rider;
        this.driver = driver;
        this.startingX = startingX;
        this.startingX = startingX;
        this.destinationX = destinationX;
        this.destinationY = destinationY;
        this.startTime = startTime;
        this.endTime = endTime;
      }
      calculateDistance(x1, y1, x2, y2);
      
    }
    
  
  