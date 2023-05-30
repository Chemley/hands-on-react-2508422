export default({cast, onChoice }) => {
  return (
    <nav className="container">
      <ul>
        <li>
          <details role="list">
            <summary aria-haspopup="listbox" role="link"></summary>
            <ul role="listbox">
              {cast.map(member=> (
                <li key={member.id}>
                  <a onClick={ ()=> { onChoice(member)} } data-tooltip={member.name}>{cast.name}</a>
                </li>
              ))}
            </ul>
          </details>
        </li>
      </ul>
    </nav>
  )
}