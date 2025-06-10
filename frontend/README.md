1. Create the project folder SharedPlaces
2. Run the command -- npm create vite@latest to create the frontend application 
3. Remove the existing boiler plate code 
4. Go to the terminal where package.json file is present and run npm install command.
5. Inside the src folder -- create places, users, shared folder 
           places, users 
                      -- components 
                      -- pages 
           shared 
              -- components 

6. Install the routing package -- npm install react-router-dom 
7. Create a Users components in users pages folder 
8. Make the configuration in app js to render the Users component in / url.
9. Make the NewPlace components in places pages folder 
10. Update the configuration to render the NewPlace components in /places/new url.
11. Create a component UsersList.js, UserList.css, UserItem.js, UserItem.css 
inside the users component folder 
12. Copy the index.css file code 
13. In Pages, create the array of USERS and pass it to the UsersList component as items props
14. Implement the code in UsersList component to userlist and if not then no users found. 
{
      id: 'u1',
      name: 'Max Schwarz',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      places: 3
    }


15. Implement the UserItem component 

<li className='user-item'>
            <div className='user-item__content'>
                <div className='user-item__image'>
                    <img src={props.image} alt={props.name}/>
                </div>
                <div className='user-item__info'>
                    <h2>{props.name}</h2>
                    <h3>{props.placesCount} 
                        {props.placesCount === 1 ? 'Place' : 'Places'}
                    </h3>
                </div>
            </div>
        </li>
		
16. Create the UIElements folder in the shared folder under components 
17. Create the Avatar Component
<div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
	
18. Copy the CSS File
.avatar {
  width: 100%;
  height: 100%;
  display: flex; 
  justify-content: center;
  align-items: center;
}

.avatar img {
  display: block;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

19. Create the Card Component 
<div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
20. Copy the CSS File
.card {
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  padding: 1rem;
  overflow: hidden;
  background: white;
}


21. Add a link to the overall content in order to navigate to user created places 
<li className='user-item'>
            <div className='user-item__content'>
                <Link to={`${props.id}/places`}>
                <div className='user-item__image'>
                    <Avatar image={props.image} alt={props.name}/>
                </div>
                <div className='user-item__info'>
                    <h2>{props.name}</h2>
                    <h3>{props.placesCount} {props.placesCount === 1 ? 'Place' : 'Places'}
                    </h3>
                </div>
                </Link>
            </div>
        </li>

22. Wrap the code in the Card Component 

<li className='user-item'>
            <Card className='user-item__content'>
                <Link to={`${props.id}/places`}>
                <div className='user-item__image'>
                    <Avatar image={props.image} alt={props.name}/>
                </div>
                <div className='user-item__info'>
                    <h2>{props.name}</h2>
                    <h3>{props.placesCount} {props.placesCount === 1 ? 'Place' : 'Places'}
                    </h3>
                </div>
                </Link>
            </Card>
        </li>

23. Implement Card Component in No Users Found.
24. Create a Navigation folder parallel to UIElements
25. MainHeader Component, MainNavigation Component, NavLinks, SideDrawer
26. Implement Main Header Compoent 
export const MainHeader = (props) => {
  return (
    <header className='main-header'>{props.children}</header>
  )
};
27. Copy the Mainheder.css file
.main-header {
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background: #ff0055;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
    padding: 0 1rem;
    z-index: 5;
  }
  
  main {
    margin-top: 5rem;
  }
  
  @media (min-width: 768px) {
    .main-header {
      justify-content: space-between;
    }
  }
  
28. Copy the mainNavigation component 

export const MainNavigation = () => {
  return (
    <MainHeader>
        <button className='main-navigation__menu-btn'>
            <span />
            <span />
            <span />
        </button>
        <h1 className='main-navigation__title'>
            <Link to="/">Your Places</Link>
        </h1>
        <nav>
            <NavLinks />
        </nav>
    </MainHeader>
  )
}

29. Copy the css mainnavigation component 
.main-navigation__menu-btn {
    width: 3rem;
    height: 3rem;
    background: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 2rem;
    cursor: pointer;
  }
  
  .main-navigation__menu-btn span {
    display: block;
    width: 3rem;
    height: 2.5px;
    background: white;
  }
  
  .main-navigation__title {
    color: white;
  }
  
  .main-navigation__title a {
    text-decoration: none;
    color: white;
  }
  
  .main-navigation__header-nav {
    display: none;
  }
  
  .main-navigation__drawer-nav {
    height: 100%;
  }
  
  @media (min-width: 768px) {
    .main-navigation__menu-btn {
      display: none;
    }
  
    .main-navigation__header-nav {
      display: block;
    }
  }
  
30. Create the NavLinks Component

export const NavLinks = () => {
  return (
    <ul className='nav-links'>
        <li>
            <NavLink to="/" exact >All Users</NavLink>
        </li>
        <li>
            <NavLink to="/u1/places" >My Places</NavLink>
        </li>
        <li>
            <NavLink to="/places/new" >Add Places</NavLink>
        </li>
        <li>
            <NavLink to="/auth" >Authenticate</NavLink>
        </li>
    </ul>
  )
};

31. Copy the CSS fILE

.nav-links {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .nav-links li {
    margin: 1rem;
  }
  
  .nav-links a {
    border: 1px solid transparent;
    color: #292929;
    text-decoration: none;
    padding: 0.5rem;
  }
  
  .nav-links a:hover,
  .nav-links a:active,
  .nav-links a.active {
    background: #f8df00;
    border-color: #292929;
    color: #292929;
  }
  
  .nav-links button {
    cursor: pointer;
    border: 1px solid #292929;
    color: #292929;
    background: transparent;
    padding: 0.5rem;
    font: inherit;
  }
  
  .nav-links button:focus {
    outline: none;
  }
  
  .nav-links button:hover,
  .nav-links button:active {
    background: #292929;
    color: white;
  }
  
  @media (min-width: 768px) {
    .nav-links {
      flex-direction: row;
    }
  
    .nav-links li {
      margin: 0 0.5rem;
    }
  
    .nav-links a {
      color: white;
      text-decoration: none;
    }
  
    .nav-links button {
      border: 1px solid white;
      color: white;
      background: transparent;
    }
    
    .nav-links button:hover,
    .nav-links button:active {
      background: #f8df00;
      color: #292929;
    }
  }
  
  
32. Create the RootComponent and render the below code.
const RootComponent = () =>{
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main> 
        </>
    )
};

33. Add a class name main-navigation__header_nav in nav tag
<nav className='main-navigation__header-nav'>
            <NavLinks />
        </nav>
34. Create a sideDrawer component 
35. Copy the below CSS code
.side-drawer {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    height: 100vh;
    width: 70%;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }
  
36. Update the sideDrawer component to render the children 
const SideDrawer = (props) => {
  return (
    <aside className='side-drawer'>{props.children}</aside>
  )
}

37. Update the MainNavigation component to render the side Drawer 
return (
    <>
    <SideDrawer>
      <nav className='main-navigation__drawer-nav'>
        <NavLinks />
      </nav>
    </SideDrawer>
    <MainHeader>
        <button className='main-navigation__menu-btn'>
            <span />
            <span />
            <span />
        </button>
        <h1 className='main-navigation__title'>
            <Link to="/">Your Places</Link>
        </h1>
        <nav className='main-navigation__header-nav'>
            <NavLinks />
        </nav>
    </MainHeader>
    </>
38. Create the div in index.html page 
<div id="drawer-hook"></div>
39. Update the SideDrawer component code to use portal 
40. create the state variable in MainNavigation component 
const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () =>{
    setDrawerIsOpen(true);
  }

  const closeDrawer = () =>{
    setDrawerIsOpen(false);
  }

41. Call this openDrawer function on button click in main Navigation component 
42. In order to close the Drawer, we need to close it using backdrop component 
43. Create the backDrop Component in UIElement components 

const Backdrop = props => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;

44. Copy the CSS File
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }
  
45. Update the main navigation component and render the backdrop component 
 { drawerIsOpen && <Backdrop onClick={closeDrawer} />}
    { drawerIsOpen &&  <SideDrawer>
      <nav className='main-navigation__drawer-nav'>
        <NavLinks />
      </nav>
    </SideDrawer>

46. Pass the closeDrawer button as a props to the same 

47. install the library -- npm install react-transition-group
48. update the code sideDrawer component 

import { CSSTransition } from 'react-transition-group';


const SideDrawer = (props) => {
  const nodeRef = useRef(null); 

  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
      nodeRef={nodeRef} 
    >
      <aside ref={nodeRef} className="side-drawer">
        {props.children}
      </aside>
    </CSSTransition>
  );

49. Update the MainNavigation component 
<SideDrawer show={drawerIsOpen}>
      <nav className='main-navigation__drawer-nav'>
        <NavLinks />
      </nav>
    </SideDrawer>
	
50. Currently when we click on any click, the sideDrawer is not able to close itself.
In order to solve it, we need to update the code.
We need to pass the onClick as a props to sideDrawer
<SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
      <nav className='main-navigation__drawer-nav'>
        <NavLinks />
      </nav>
    </SideDrawer>

51. Once we click on any users, it should redirect to all the places user has created. Currently we have not implemented it. In order to implement it, we need to first create the 
UserPlaces components inside the places pages folder.

52. Create the PlaceList component along with css file inside the component folder.
53. Create the PlaceItem component along with css file inside the component folder.
54. Copy the below code in PlaceList component.
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import './PlaceList.css';

const PlaceList = (props) =>{

    if(props.items.length === 0){
        return (
            <div className="place-list center">
                <Card>
                    <h2>No Places Found. May be create one?</h2>
                    <button>Share Place</button>
                </Card>
            </div>
        )
    }

    return (
        <ul className="place-list">  
            {
                props.items.map((place) =>{
                    return (
                        <PlaceItem 
                            key={place.id}
                            id={place.id}
                            image={place.imageUrl}
                            title={place.title}
                            description={place.description}
                            address={place.address}
                            creatorId={place.creator}
                            coordinates={place.location}
                         />
                    )
                })
            }
        </ul>

    )
};

export default PlaceList;

55. Copy the below css code in placeList Component
.place-list {
    list-style: none;
    margin: 1rem auto;
    padding: 0;
    width: 90%;
    max-width: 40rem;
  }
  
56. Copy the below code for placeItem.jsx file 
import Card from '../../shared/components/UIElements/Card';
import './PlaceItem.css';

const PlaceItem = (props) =>{
    return <li className="place-item">
        <Card className="place-item__content">
            <div className='place-item__image'>
                <img src={props.image} alt={props.title} />
            </div>
            <div className='place-item__info'>
                <p>{props.title}</p>
                <p>{props.address}</p>
                <p>{props.description}</p>
            </div>
            <div className='place-item__actions'>
                <button>VIEW MAP</button>
                <button>EDIT</button>
                <button>DELETE</button>
            </div>
        </Card>
    </li>
};

export default PlaceItem;

57. Copy the placeItem.css file code 
.place-item {
    margin: 1rem 0;
  }
  
  .place-item__content {
    padding: 0;
  }
  
  .place-item__info {
    padding: 1rem;
    text-align: center;
  }
  
  .place-item__image {
    width: 100%;
    height: 12.5rem;
    margin-right: 1.5rem;
  }
  
  .place-item__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .place-item__info h2,
  .place-item__info h3,
  .place-item__info p {
    margin: 0 0 0.5rem 0;
  }
  
  .place-item__actions {
    padding: 1rem;
    text-align: center;
    border-top: 1px solid #ccc;
  }
  
  .place-item__modal-content {
    padding: 0;
  }
  
  .place-item__modal-actions {
    text-align: right;
  }
  
  .place-item__actions button,
  .place-item__actions a {
    margin: 0.5rem;
  }
  
  @media (min-width: 768px) {
    .place-item__image {
      height: 20rem;
    } 
  }
  
58. Update the userPlace component 

import React from 'react';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  }
];

const UserPlaces = () => {

  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;

59. In the app.jsx where we hard coded the url for u1 users. We will implement the dynamic
routing.
{
        path : '/:userId/places',
        Component : UserPlaces
      }
	  
60. how to read the params in dynamic routing 
import { useParams } from 'react-router-dom';

const UserPlaces = () => {

  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

61. Create the folder FormElements inside the shared/component folder.
62. Create the Button Component
import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const Button = props => {
  if (props.href) {
    return (
      <a
        className={`button button--${props.size || 'default'} ${props.inverse &&
          'button--inverse'} ${props.danger && 'button--danger'}`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`button button--${props.size || 'default'} ${props.inverse &&
          'button--inverse'} ${props.danger && 'button--danger'}`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`button button--${props.size || 'default'} ${props.inverse &&
        'button--inverse'} ${props.danger && 'button--danger'}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;

63. Copy the below css file in button.css file
.button {
    font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid #ff0055;
    border-radius: 4px;
    background: #ff0055;
    color: white;
    cursor: pointer;
    margin-right: 1rem;
    text-decoration: none;
    display: inline-block;
  }
  
  .button:focus {
    outline: none;
  }
  
  .button:hover,
  .button:active {
    background: #ff4382;
    border-color: #ff4382;
  }
  
  .button--inverse {
    background: transparent;
    color: #ff0055;
  }
  
  .button--inverse:hover,
  .button--inverse:active {
    color: white;
    background: #ff0055;
  }
  
  .button--danger {
    background: #830000;
    border-color: #830000;
  }
  
  .button--danger:hover,
  .button--danger:active {
    background: #f34343;
    border-color: #f34343;
  }
  
  .button:disabled,
  .button:hover:disabled,
  .button:active:disabled {
    background: #ccc;
    color: #979797;
    border-color: #ccc;
    cursor: not-allowed;
  }
  
  .button--small {
    font-size: 0.8rem;
  }
  
  .button--big {
    font-size: 1.5rem;
  }

64. Update the button present in the placeitem component 
	<Button inverse>VIEW ON MAP</Button>
	<Button to={`/places/${props.id}`}>EDIT</Button>
	<Button danger>DELETE</Button>
	
65. Update the New Place component 
import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import './NewPlace.css';

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input element="input" type="text" label="Title" />
    </form>
  );
};

export default NewPlace;

66. Add the CSS code 
.place-form {
  list-style: none;
  margin: 0 auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  background: white;
}



67. Input JS Code 
import React from 'react';

import './Input.css';

const Input = props => {
  const element =
    props.element === 'input' ? (
      <input id={props.id} type={props.type} placeholder={props.placeholder} />
    ) : (
      <textarea id={props.id} rows={props.rows || 3} />
    );

  return (
    <div className={`form-control`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
};

export default Input;


68. Input.css code 
.form-control {
  margin: 1rem 0;
}

.form-control label,
.form-control input,
.form-control textarea {
  display: block;
}

.form-control label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.form-control input,
.form-control textarea {
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  background: #f8f8f8;
  padding: 0.15rem 0.25rem;
}

.form-control input:focus,
.form-control textarea:focus {
  outline: none;
  background: #ebebeb;
  border-color: #510077;
}

.form-control--invalid label,
.form-control--invalid p {
  color: red;
}

.form-control--invalid input,
.form-control--invalid textarea {
  border-color: red;
  background: #ffd1d1;
}

69. Lets implement useEffect whenver the value of the input or validity changes 
70. Update the Input.jsx component
  const { id, onInput} = props;
  const { value, isValid } = inputState;

  useEffect(()=>{
    onInput(id,value,isValid);
  }, [id, value, isValid, onInput]);
  
71. Update the code in NewPlace.jsx

import React, { useCallback } from 'react';

import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import './NewPlace.css';

const NewPlace = () => {

  const titleInputHandler = useCallback((id, value, isValid) =>{

  }, []);

  const descriptionInputHandler = useCallback((id, value, isValid) =>{

  }, []);


  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={titleInputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={descriptionInputHandler}
      />
    </form>
  );
};

export default NewPlace;

72. Managing the form wide state 
import React, { useCallback, useReducer } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import './NewPlace.css';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':{
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }
        },
        isValid: formIsValid
      };
    }
    default:
      return state;
  }
};

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    isValid: false
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      isValid: isValid,
      inputId: id
    });
  }, []);

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;


73. Add the function for submitting the form 
const placeSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
  };
  

 <form className="place-form" onSubmit={placeSubmitHandler}>

<Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address."
        onInput={inputHandler}
      />
	  
	  
74. Lets now started working on the Update Page
Update the app.jsx component 
{
        path : '/places/:placeId',
        Component : UpdatePlace
      }
75. Create the Update Place Component 
import React from 'react'

export const UpdatePlace = () => {
  return (
    <div>UpdatePlace</div>
  )
};

76. Update the Place Component 
import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  }
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;

79. Adjusting the Input Component
const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.value || '',
    isTouched: false,
    isValid: props.isValid || false
  });
  
80. Rename the css file NewPlace.css to PlaceForm.css file 

81. Add the css file in NewPlace and UpdatePlace component 

82. Add classNames to UpdatePlace component 

83. Update the NewPlace component to add address in useReducer 
address: {
        value: '',
        isValid: false
      }

84. Create a hook folder inside the shared folder parallel to components folder 
85. Name the component as form-hook.jsx
86. write the below code 
import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':{
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }
        },
        isValid: formIsValid
      };
    }
    default:
      return state;
  }
};

export const useForm = (initialInputs, initialFormValidity ) =>{

    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initialInputs,
        isValid: initialFormValidity
      });
    
      const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
          type: 'INPUT_CHANGE',
          value: value,
          isValid: isValid,
          inputId: id
        });
      }, []);

      return [formState, inputHandler]
};

87. Update the newPlace component 

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import './PlaceForm.css';
import { useForm } from '../../shared/hooks/form-hook';

const NewPlace = () => {
 const [formState, inputHandler] = useForm({
    title: {
      value: '',
      isValid: false
    },
    description: {
      value: '',
      isValid: false
    },
    address: {
      value: '',
      isValid: false
    }
  },
  false
);

  const placeSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;

88. Update the updatePlace component 
const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: identifiedPlace.title,
        isValid: true
      },
      description: {
        value: identifiedPlace.description,
        isValid: true
      }
    },
    true
  );

  const placeUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
89. Update the input component 

const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouched: false,
    isValid: props.initialValid || false
  });
  
90. while making an api call, it will take some time to get the data from backend. Meanwhile we need to render the component with inital value in update place. We need to adjust the updatePlace component 

91. import { useCallback, useReducer } from 'react';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':{
        let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }
        },
        isValid: formIsValid
      };
    }
    case 'SET_DATA':
      return {
        inputs: action.inputs,
        isValid: action.formIsValid
      };
    default:
      return state;
  }
};

export const useForm = (initialInputs, initialFormValidity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      isValid: isValid,
      inputId: id
    });
  }, []);

  const setFormData = useCallback((inputData, formValidity) => {
    dispatch({
      type: 'SET_DATA',
      inputs: inputData,
      formIsValid: formValidity
    });
  }, []);

  return [formState, inputHandler, setFormData];
};

92. Update Place component
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './PlaceForm.css';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  }
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  useEffect(() => {
    setFormData(
      {
        title: {
          value: identifiedPlace.title,
          isValid: true
        },
        description: {
          value: identifiedPlace.description,
          isValid: true
        }
      },
      true
    );
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;


93. Fixing the minor issues in UI
File : Place-list

import Button from '../../shared/components/FormElements/Button';

<div className="place-list center">
                <Card>
                    <h2>No Places Found. May be create one?</h2>
                    <Button to="/places/new">Share Place</Button>
                </Card>
            </div>

94. UpdatePlace 
 useEffect(() => {
    if(identifiedPlace){
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true
          },
          description: {
            value: identifiedPlace.description,
            isValid: true
          }
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);
  
95. File : UpdatePlace 
import Card from '../../shared/components/UIElements/Card';

if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
        <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }
  
96. Create a modal in the UIElements folder 
File : Modal.js
import React, { useRef} from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from './Backdrop';
import './Modal.css';

const ModalOverlay = props => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : event => event.preventDefault()
        }
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = props => {
  const nodeRef = useRef(null);

  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
        nodeRef={nodeRef}
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;


97. Create a css file for modal 
File : modal.css 
.modal {
  z-index: 100;
  position: fixed;
  top: 22vh;
  left: 10%;
  width: 80%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 8px;
}

.modal__header {
  width: 100%;
  padding: 1rem 0.5rem;
  background: #2a006e;
  color: white;
}

.modal__header h2 {
  margin: 0.5rem;
}

.modal__content {
  padding: 1rem 0.5rem;
}

.modal__footer {
  padding: 1rem 0.5rem;
}

@media (min-width: 768px) {
  .modal {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}

.modal-enter {
  transform: translateY(-10rem);
  opacity: 0;
}

.modal-enter-active {
  transform: translateY(0);
  opacity: 1;
  transition: all 200ms;
}

.modal-exit {
  transform: translateY(0);
  opacity: 1;
}

.modal-exit-active {
  transform: translateY(-10rem);
  opacity: 0;
  transition: all 200ms;
}

98. Show a deletion warning 
File : PlaceItem.jsx 

import React, { useState } from 'react';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import './PlaceItem.css';

const PlaceItem = (props) =>{
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const showDeleteWarningHandler = () => {
        setShowConfirmModal(true);
      };
    
      const cancelDeleteHandler = () => {
        setShowConfirmModal(false);
      };
    
      const confirmDeleteHandler = () => {
        setShowConfirmModal(false);
        console.log('DELETING...');
      };    

    return( 
        <>
        <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note that it
          can't be undone thereafter.
        </p>
      </Modal>
        <li className="place-item">
        <Card className="place-item__content">
            <div className='place-item__image'>
                <img src={props.image} alt={props.title} />
            </div>
            <div className='place-item__info'>
                <p>{props.title}</p>
                <p>{props.address}</p>
                <p>{props.description}</p>
            </div>
            <div className='place-item__actions'>
                <Button inverse >VIEW ON MAP</Button>
                <Button to={`/places/${props.id}`} >EDIT</Button>
                <Button danger onClick={showDeleteWarningHandler}>DELETE</Button>
            </div>
        </Card>
    </li>
        </>
    )
};

export default PlaceItem;

99. Adding an auth Page and Login Form 
create an Auth.jsx page in the users pages folder 
create an Auth.css file 

100. File : Auth.jsx 

import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './Auth.css';

const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const authSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        <Input
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password, at least 5 characters."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          LOGIN
        </Button>
      </form>
    </Card>
  );
};

export default Auth;

101. File : Auth.css file 
.authentication__header {
    color: white;
    text-align: center;
  }
  
  .authentication {
    width: 90%;
    max-width: 25rem;
    margin: 7rem auto;
    text-align: center;
  }
  
  .authentication form {
    margin-bottom: 1rem;
  }
  
102. Register the auth route in app.jsx code 
{
        path : '/auth',
        Component : Auth
      }
	  

103. Adding Signup and switch mode
File : Auth.jsx
import React, { useState } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './Auth.css';

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false
          }
        },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };

  const authSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name."
            onInput={inputHandler}
          />
        )}
        <Input
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password, at least 5 characters."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? 'LOGIN' : 'SIGNUP'}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
      </Button>
    </Card>
  );
};

export default Auth;


104. File : form-hook.jsx
for (const inputId in state.inputs) {
        if (!state.inputs[inputId]) {
          continue;
        }
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }

105. Adding Auth Context for App Wide State Management 
create a context folder inside the shared folder 
create a auth-context.jsx file 
import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {}
});

106. App.js 
import React, { useState, useCallback } from 'react';
import { AuthContext } from './shared/context/auth-context';
const App = () =>{
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const login = useCallback(() => {
      setIsLoggedIn(true);
    }, []);
  
    const logout = useCallback(() => {
      setIsLoggedIn(false);
    }, []);

  return (
    <AuthContext.Provider
          value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
        >
            <RouterProvider router={router} />
        </AuthContext.Provider>
  )
};

107. Listening to context changes 
File : NavLinks.jsx 
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/u1/places">MY PLACES</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;

108. Adding authenticated and unathenticated routes 
File : Auth.jsx 

import { AuthContext } from '../../shared/context/auth-context';

const auth = useContext(AuthContext);

const authSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
    auth.login();
  };
  
109. File : App.jsx 
import React, { useState, useCallback } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import RootComponent from './RootComponent';
import Users from './users/pages/Users';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './users/pages/Auth';
import { AuthContext } from './shared/context/auth-context';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      Component: RootComponent,
      errorElement: <p>404 Page Not Found</p>,
      children: [
        { path: '/', Component: Users },
        { path: '/:userId/places', Component: UserPlaces },
        ...(
          isLoggedIn 
            ? [
                { path: '/places/new', Component: NewPlace },
                { path: '/places/:placeId', Component: UpdatePlace }
              ]
            : [
                { path: '/auth', Component: Auth }
              ]
        )
      ]
    }
  ]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
};

export default App;

110. More Auth Context Usage 
File : PlaceItem.jsx 

import { AuthContext } from '../../shared/context/auth-context';

const auth = useContext(AuthContext);

 {auth.isLoggedIn && (
              <Button to={`/places/${props.id}`}>EDIT</Button>
            )}

            {auth.isLoggedIn && (
              <Button danger onClick={showDeleteWarningHandler}>
                DELETE
              </Button>
            )}

111. NavLink.jsx 
{auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}


111. Copy paste below lines of code in index.html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/openlayers@4.6.5/css/ol.css" type="text/css">
<script src="https://cdn.jsdelivr.net/npm/openlayers@4.6.5/dist/ol.min.js"></script>

112. Create the Map.jsx file and Map.css file in the UIElement folder 
File : Map.jsx

import React, { useRef, useEffect } from 'react';
 
import './Map.css';
 
const Map = props => {
  const mapRef = useRef();
  
  const { center, zoom } = props;
 
  useEffect(() => {
    new window.ol.Map({
      target: mapRef.current.id,
      layers: [
        new window.ol.layer.Tile({
          source: new window.ol.source.OSM()
        })
      ],
      view: new window.ol.View({
        center: window.ol.proj.fromLonLat([center.lng, center.lat]),
        zoom: zoom
      })
    });
  }, [center, zoom]);
 
  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
      id="map"
    ></div>
  );
};
 
export default Map;

113. File : Map.css 
.map {
    width: 100%;
    height: 100%;
  }
  
114. Render the Map in View on Map button click 
File : PlaceItem.jsx 

import Map from '../../shared/components/UIElements/Map';

const [showMap, setShowMap] = useState(false);
const openMapHandler = () => setShowMap(true);
const closeMapHandler = () => setShowMap(false);

<Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
  
<Button inverse onClick={openMapHandler} >VIEW ON MAP</Button>

115. In the Main.jsx file remove strict mode 


 
