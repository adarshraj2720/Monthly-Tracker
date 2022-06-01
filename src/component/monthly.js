import React from "react";


class Monthly extends React.Component {
    constructor(props) {
        super()

        this.state = ({
            activity: "",
            isshow: true,
            activitylist: [],
            month: this.getmonth(),

        })
    }


    componentDidMount() {
        if (localStorage.activitylist) {
            this.setState({ activitylist: JSON.parse(localStorage.activitylist) || [] });
        }
        window.addEventListener('beforeunload', this.handleUpdateLocalStorage);
    }

    componentWillUnmount() {
        window.removeEventListener('beforeunload', this.handleUpdateLocalStorage);
    }




    handlechange = (event) => {
        this.setState({
            activity: event.target.value,
        })
        console.log(event.target.value)
    }


    handlesubmit = (event) => {
        event.preventDefault()
        let list = this.state.activity
        this.setState({
            isshow: !this.state.isshow,
            activitylist: this.state.activitylist.concat(list),
            activity: "",
        })
        console.log(this.state.activity)
    }



    handledelete = (event) => {
        let id = event.target.id
        let activitylistfilter = this.state.activitylist.filter((t) => t !== id)
        this.setState({
            activitylist: activitylistfilter
        })
        console.log(id)
    }





    handleUpdateLocalStorage = () => {
        localStorage.setItem('activities', JSON.stringify(this.state.activitylist));
    };


    getmonth = () => {
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const d = new Date();
        let name = month[d.getMonth()];
        return name;
    }



    render() {
        return (
            <>
                <form onSubmit={(event) => { this.handlesubmit(event) }}>
                    <input onChange={(event) => { this.handlechange(event) }} type="text" name="activity" id="activity" placeholder="e.g Coding" value={this.state.activity}></input>
                    <button type="submit" >Add Activity</button>
                </form>

                {
                    this.state.isshow ?

                        <div>
                            {
                                this.state.activitylist.map((a) => {
                                    return (
                                        <div id={a}>
                                            <p>{a}</p>
                                            <p>{this.state.month}</p>
                                            <button id={a} onClick={(event) => { this.handledelete(event) }}>❌</button>
                                            <div>
                                                {
                                                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((btn) => {
                                                        return (
                                                            <>
                                                                <button >{btn}</button>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        <div>
                            {
                                this.state.activitylist.map((a) => {
                                    return (
                                        <div id={a}>
                                            <p>{a}</p>
                                            <p>{this.state.month}</p>
                                            <button id={a} onClick={(event) => { this.handledelete(event) }}>❌</button>
                                            <div>
                                                {
                                                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((btn) => {
                                                        return (
                                                            <>
                                                                <button >{btn}</button>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>

                }


            </>
        )
    }

}


export default Monthly;