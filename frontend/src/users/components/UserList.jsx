import Card from "../../shared/components/UIElements/Card";
import UserItem from "./UserItem";
import './UserList.css';

const UserList = (props) =>{

    if(props.items.length === 0){
        return (
            <div className="center">
                <Card>
                    No User Found
                </Card>
            </div>
        )
    }

    return (
        <ul className="users-list">  
            {
                props.items.map((user) =>{
                    return (
                        <UserItem 
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            image={user.image}
                            placesCount={user.places.length} />
                    )
                })
            }
        </ul>

    )
};

export default UserList;