import PropTypes from "prop-types";
const Link = ({r}) => {
    return (
        <div>
            <li className="mr-10 p-2">
                <a href={r.path}>{r.name}</a>
            </li>
        </div>
    );
};

Link.propTypes ={
    r:PropTypes.object
}

export default Link;