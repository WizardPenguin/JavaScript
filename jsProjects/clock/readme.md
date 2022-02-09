### to deal with problem of hand going back to start position at degree = 0
1. stop transition of element when degree == 0 for someone
2. if we spot problem it's due to reason we are going back to 0deg, instead 
    we can use rotation in second hand = original + 360*minutes
3. optimisation instaed of making Date() object again... . we can just create single instance
    and increase time after each call of setInterval function, this doesn't need to getSeconds,.. etc again,again 
4. to get rid of 90deg offset we can instead rotate outer clock circle by 90degree 
