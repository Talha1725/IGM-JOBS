import React from 'react'
import { Avatar } from '@mui/material';
import { BsBookmark } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import Image from "./cat.jpg"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Badge from 'react-bootstrap/Badge';



function JobDetails() {
    const badgeStyle = { borderRadius: "11px" }
    return (
        <div className="jobFilters p-3">
            <div className="row ">
                <div className="d-flex justify-content-end">
                    <BsBookmark size={24} />

                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-auto">
                    <Avatar
                        alt="Remy Sharp"
                        src={Image}
                        sx={{ width: 50, height: 50 }}
                    />
                </div>
                <div className="col">
                    <span className="fw-bold fs-5 text-dark" style={{
                        fontFamily: 'Inter',
                    }}>Looking for a Figma Designer</span>
                </div>
            </div>
            <div className="row">
                <div style={{ paddingTop: "20px", paddingBottom: "11px" }}>
                    <span> <strong> Project Overview</strong> </span>
                </div>
                <div style={{ width: "100%" }}>
                    <span>
                        Lorem Ipsum is simply dummy text of the printing
                        nd typesetting industry. Lorem Ipsum has been
                        e industry's standard dummy text ever since
                        he 1500s.
                    </span>
                    <br />
                    <span>
                        Lorem Ipsum is simply dummy text of the printing
                        nd typesetting industry. Lorem Ipsum has been
                        e industry's standard dummy text ever since
                        he 1500s.
                    </span>
                    <br />

                    <span>
                        Lorem Ipsum is simply dummy text of the printing
                        nd typesetting industry. Lorem Ipsum has been
                        e industry's standard dummy text ever since
                        he 1500s.
                    </span>
                    <br />
                </div>
            </div>
            <div className="row">
                <div style={{ paddingTop: "20px", paddingBottom: "11px" }}>
                    <span> <strong> Skills and Experties</strong> </span>
                </div>
                <div className="d-flex flex-wrap">
                    <Badge style={badgeStyle} className='me-3 mb-3 p-2' bg="dark">Development</Badge>
                    <Badge style={badgeStyle} className='me-3 mb-3 p-2' bg="dark">Stack Develo..</Badge>
                    <Badge style={badgeStyle} className='mb-3 p-2' bg="dark">UI / UX</Badge>
                </div>


            </div>
            <div className="row" style={{ fontSize: "0.8rem", color: "rgba(0, 0, 0, 0.5)" }}>
                <div className="row">
                    <div className="col-6">
                        <span className=" col text-muted">5.00 of 48 Reviews</span>
                    </div>
                    <div className="col-6">
                        <span className=" col ">Project Success 28</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Stack spacing={1}>
                            <Rating name="size-small" defaultValue={5}  size="small" />
                        </Stack>
                    </div>
                    <div className="col-6">
                        <span className=" col ">Project Verified</span>
                    </div>
                </div>

            </div>

            <div className="row d-flex justify-content-center" style={{
                marginTop: "50px"
            }}>
                <Button className='col-auto' variant="dark">Submitted</Button>
            </div>
        </div>
    )
}

export default JobDetails
