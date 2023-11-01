let variableName = 'some value';
const constantName = 'immutable value';
const x = 1
console.log('global scope:', x)
function display() {
 console.log('functional scope:', x)
 const x = 2
 if (x === 2) {
 let x = 3
 console.log('block scope:', x)
 }
}

// vti_railway_74_rsa
// ssh-keygen -t rsa -b 4096
// C:\Users\DucNguyenAnh/.ssh/vti_railway_74_rsa
// eval $(ssh-agent -s)
// ssh-add ~/.ssh/vti_railway_74_rsa
// code ~/.ssh/config
// clip < ~/.ssh/vti_railway_74_rsa.pub
// ssh -T git@github.com

// code ~/.ssh/config
// Host github.com
// AddKeysToAgent yes
// IdentityFile ~/.ssh/vti_railway_74_rsa

//git checkout -b AnhDucNguyen93