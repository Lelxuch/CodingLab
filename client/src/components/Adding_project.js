import React from 'react'

const Adding_project = () => {
    return (
        <div id="Add-project">
            <form>
                <div className="input-item">
                    <label htmlFor="cars">Name of the project</label>
                    <input type="text" placeholder="Name of the project"/>
                </div>
                <div className="input-item">
                    <label htmlFor="cars">Description</label>
                    <textarea name="desc" id="proj-desc" placeholder="Description"></textarea>
                </div>
                <div className="input-item">
                    <label htmlFor="cars">Task file</label>
                    <input type="file" className="input-upload" />
                </div>
                <div className="input-item">
                    <label htmlFor="cars">Category</label>
                    <select id="cars" name="cars">
                        <option value="volvo">---</option>
                        <option value="saab">WEB</option>
                        <option value="fiat">IOS</option>
                        <option value="audi">Android</option>
                    </select>
                </div>
                <div className="input-item">
                    <label htmlFor="cars">Price</label>
                    <input placeholder="Price"></input>
                </div>
                <div className="submit">
                    <button type="submit" className="submit-btn">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Adding_project
