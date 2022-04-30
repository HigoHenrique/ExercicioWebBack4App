const nameCat = document.getElementById('name');
const age = document.getElementById('age');
const gender = document.getElementById('gender');
const color = document.getElementById('color');
const btnRegister = document.getElementById('btn-register');

const CreateProduct = async () => {
    const myNewObject = new Parse.Object('cats');
    myNewObject.set('name', nameCat.value);
    myNewObject.set('color', color.value);
    myNewObject.set('gender', gender.value);
    myNewObject.set('age', parseInt(age.value));
  try {
      const result = await myNewObject.save();
      alert('Gato cadastrado com sucesso!')
      location.reload()
      console.log('producs created', result);
  } catch (error) {
    console.error('Error while creating producs: ', error);
    alert('Preencha todos os campos do cadastro!')
  }
}

btnRegister.onclick = CreateProduct;