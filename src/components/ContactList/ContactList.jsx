const ContactList = ({ list, onRemove }) => {
    return (<ul>
        {list.map(({ id, name, number }) => (
            <li key={id}>
                <span>{name}</span> - <span>{number}</span>
                <button onClick={() => onRemove({ id })}>Remove</button>
            </li>
        ))}
        </ul>
    )
};

export default ContactList;