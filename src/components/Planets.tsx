import React from 'react';
import PropTypes from 'prop-types';

function Planets(props: any) {
	return <h1>{props.name}</h1>;
}

Planets.protoTypes = {
	name: PropTypes.string
};

export default Planets;
