let ListCats = document.getElementById('cats')
let row;
let column;

const ReadingList = async () => {
  const cats = Parse.Object.extend('cats');
  const query = new Parse.Query(cats);

  try {
    const results = await query.find();
    for (const object of results) {
      row = document.createElement('tr')

      const ObjectId = object.id;
      const name = object.get('name')
      const color = object.get('color')
      const gender = object.get('gender')
      const age = object.get('age')

      column = document.createElement('td')
        column.appendChild(document.createTextNode(name))
         row.appendChild(column)
         ListCats.appendChild(row)
         
         column = document.createElement('td')
         column.appendChild(document.createTextNode(color))
         row.appendChild(column)
         ListCats.appendChild(row)

         column = document.createElement('td')
         column.appendChild(document.createTextNode(gender))
         row.appendChild(column)
         ListCats.appendChild(row)

         column = document.createElement('td')
         column.appendChild(document.createTextNode(age))
         row.appendChild(column)
         ListCats.appendChild(row)

         column = document.createElement('td');
         let btnDelete = document.createElement('button');
        btnDelete.innerHTML = 'Deletar'
        row.appendChild(btnDelete)
        ListCats.appendChild(row)

        btnDelete.onclick = async function DeleteEvent () {
          const query = new Parse.Query('cats');
          try {

            const object = await query.get(ObjectId);
            try {
              const response = await object.destroy();
              console.log('Deleted ParseObject', response);
              alert('Deletado com sucesso!')
              location.reload();
            } catch (error) {
              console.error('Error while deleting ParseObject', error);
            }
          } catch (error) {
            console.error('Error while retrieving ParseObject', error);
          }
    }
  }
  } catch (error) {
    console.error('Error while fetching cats', error);
  }
}

  ReadingList();