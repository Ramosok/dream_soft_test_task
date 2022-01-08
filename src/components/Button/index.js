export const Button = ({tittle,handleUser}) => {
    return (
        <button name={tittle} onClick={handleUser}>
            {tittle}
        </button>
    );
};

