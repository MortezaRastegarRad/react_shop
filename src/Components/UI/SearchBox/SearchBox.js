// import React, {Component} from 'react'
// // import ReactSearchBox from 'react-search-box'
// import SearchField from "react-search-field";
//
// class SearchBox extends Component {
//     render() {
//         return (
//             <SearchField
//                 placeholder="Search..."
//                 onChange={record => console.log(record)}
//                 searchText="This is initial search text"
//                 classNames="test-class"
//             />
//         );
//     };
// }
//
// export default SearchBox;

import 'font-awesome/css/font-awesome.min.css';
import React, {Component} from "react";
import styles from './SearchBox.module.css'

class SearchBox extends Component {
    state = {
        query: "",
        data: [],
        filteredData: []
    };

    handleInputChange = event => {
        const query = event.target.value;

        this.setState(prevState => {
            const filteredData = prevState.data.filter(element => {
                return element.name.toLowerCase().includes(query.toLowerCase());
            });

            return {
                query,
                filteredData
            };
        });
    };

    getData = () => {
        fetch(`http://localhost:4000/restaurants`)
            .then(response => response.json())
            .then(data => {
                const {query} = this.state;
                const filteredData = data.filter(element => {
                    return element.name.toLowerCase().includes(query.toLowerCase());
                });

                this.setState({
                    data,
                    filteredData
                });
            });
    };

    componentWillMount() {
        this.getData();
    }

    render() {
        return (
            <div className={styles.searchForm}>
                <div className={styles.btn}>
                    <button>
                        <i className="fa fa-search" style={{color:"black", padding:"8px 0"}} aria-hidden="true"> </i>
                    </button>
                </div>
                <input
                    className={styles.Input}
                    placeholder="جستجو در ایران جهیزیه ..."
                    value={this.state.query}
                    onChange={this.handleInputChange}
                />
                <div>{this.state.filteredData.map(i => <p>{i.name}</p>)}</div>
            </div>
        );
    }
}

export default SearchBox;