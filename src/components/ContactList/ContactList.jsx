const ContactList = ({ list }) => {
    return (<ul>
        {list.map(({ id, name, number }) => (
            <li key={id}>
                <span>{name}</span> - <span>{number}</span>
            </li>
        ))}
        </ul>
    )
};

export default ContactList;