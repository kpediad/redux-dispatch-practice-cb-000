export let state;


export function managePets(state, action){
  switch (action.type) { 
      case 'ADD_PET':
        return { count: state.count + 1 }
      case 'REMOVE_PET':
        return { count: state.count + 1 }
      default:
        return state;
  }
}

export function dispatch(){
  state = managePets(state, action);
  render();
}

export function render(){
  document.getElementById('container').innerHTML = '<ul>' + state.pets.map(pet => `<li>${pet.name}</li>`) + '</ul>'; 
}
