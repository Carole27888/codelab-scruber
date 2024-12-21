// Function to calculate distance from Scuber HQ in blocks
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; // Headquarters location
    return Math.abs(pickupLocation - hqLocation);
  }
  
  // Function to calculate distance from Scuber HQ in feet
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264; // Convert blocks to feet
  }
  
  // Function to calculate distance traveled in feet
  function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * 264; // Convert blocks to feet
  }
  
  // Function to calculate fare price
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= 400) {
      return 0; // First 400 feet are free
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02; // $0.02 per foot after 400 feet
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; // Flat rate for distances over 2000 feet
    } else {
      return 'cannot travel that far'; // Over 2500 feet
    }
  }
  
  // Example Test Cases
  console.log(distanceFromHqInBlocks(50)); // 8
  console.log(distanceFromHqInFeet(50));   // 2112
  console.log(distanceTravelledInFeet(34, 38)); // 1056
  console.log(calculatesFarePrice(34, 32)); // 0.64
  console.log(calculatesFarePrice(50, 58)); // 25
  console.log(calculatesFarePrice(50, 70)); // 'cannot travel that far'
  