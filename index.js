function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {
    return driver.name;
  });
}

function exactMatch (drivers, attr) {
  return drivers.filter(function (driver) {
    if driver.attr === attr;
      return driver.name;
      break;
  });
}

function exactMatchToList (drivers, attr) {
  return exactMatch(drivers, revenue).map(function (driver) {
    return driver.name;
  });
}
