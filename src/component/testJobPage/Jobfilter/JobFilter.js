import React from 'react'
import Form from 'react-bootstrap/Form';
import RangeSlider from "../../RangeSlider/RangeSlider"
import "./Filter.css"

function JobFilter() {
    const checkboxArr = ['Freelance / Contract', 'Full Time', 'Part Time', 'Internship Jobs', 'Training Jobs'];

    return (
        <div style={{width:"100%"}}>
            <div className="searchFilters">
                <br />
                <span className='Search-result'>
                    File Results (24,000)
                </span>
                <br />
                <br />
                <strong>Availability</strong>
                <br /><br />

                <Form>
                    {checkboxArr.map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                            <Form.Check
                                type="checkbox"
                                id={`default-${type}`}
                                label={type}
                                className="custom-checkbox"
                            />
                        </div>
                    ))}
                </Form>
                <br />
                <br />
                <strong>Jobs you might like</strong>
                <br /><br />
                <Form>
                    {checkboxArr.map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                            <Form.Check
                                type="checkbox"
                                id={`default-${type}`}
                                label={type}
                                className="custom-checkbox"
                            />
                        </div>
                    ))}
                </Form>
                <br /><br />
                <strong>Salary</strong>
                <br />
                <br />
                <RangeSlider />
                <br />
                <br />
                <strong>Specialties</strong>
                <br /><br />
                <Form>
                    {checkboxArr.map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                            <Form.Check
                                type="checkbox"
                                id={`default-${type}`}
                                label={type}
                                className="custom-checkbox"
                            />
                        </div>
                    ))}
                </Form>
                <br />
                <br />
                <strong>Experience Levels</strong>
                <br /><br />
                <Form>
                    {checkboxArr.map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                            <Form.Check
                                type="checkbox"
                                id={`default-${type}`}
                                label={type}
                                className="custom-checkbox"
                            />
                        </div>
                    ))}
                </Form>
            </div>
        </div>

    )
}

export default JobFilter
