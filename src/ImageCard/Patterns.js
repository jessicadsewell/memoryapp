import React from "react";

class Pattern extends React.Component {

    state = {
        count: 0
    };

    // Handling click event on images
    handleClick = () => {
        this.setState({ count: this.state.count + 1})
    };

    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li className="brand"><a href="/">Clicky Game</a></li>
                </ul>
                <ul>
                    <li className="Click an image to begin!"></li>
                </ul>
                <ul>
                    <li>"Score: " "0" "| Top Score: " "0"</li>
                </ul>
            </nav>
        )
    }
}