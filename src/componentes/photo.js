import React, {PureComponent} from 'react';

export default class Pictures extends PureComponent {
    render() {
        const {picture}=this.props;
        return (
            <aside align="right"><img src={picture} alt='100' width='150' height='130'/>
            </aside>
        )
    }
}