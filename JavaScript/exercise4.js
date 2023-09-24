const originalProfile ={
    name: "John Doe",
    age: 30,
    preferences: {
        theme: "dark",
        notifications: true,
    },
};
global.structuredClone = v => JSON.parse(JSON.stringify(v));

const clonedProfile = global.structuredClone(originalProfile);

clonedProfile.preferences.theme = "light";

console.log(originalProfile.preferences.theme);

console.log(clonedProfile.preferences.theme);


if(clonedProfile == originalProfile){
    return true;
} else{
    return false;
}