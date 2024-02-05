import React from 'react'
import "../App.css"

export default function Description
    () {
    return (
        <div className='container3'>
            <h5 className='h5'>The Chmod Calculator is a user-friendly web application designed to facilitate the generation of chmod commands and visualize Linux file permission settings. This tool enables users to interactively select and modify permission settings for three categories: user, group, and others. Users can choose between read, write, and execute permissions for each category, and the application dynamically generates the corresponding chmod command and its Linux representation.</h5>

            <span>Key Features:</span>
            <div className='key_feature'>
            <p className='desc'><span>Interactive Checkbox Selection:</span> Users can easily toggle read (r), write (w), and execute (x) permissions for the user, group, and other categories using intuitive checkboxes.</p>

            <p className='desc'><span>Chmod Command Generation:</span> The application dynamically calculates and displays the chmod command based on the selected permission settings, providing users with the appropriate command to apply the desired file permissions.</p>

            <p className='desc'><span>Linux Representation:</span> In addition to the chmod command, the application visually represents the Linux permission settings, making it easier for users to understand and learn the connection between numeric and symbolic representations.</p>
            </div>
        </div>
    )
}
