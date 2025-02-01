// your code goes here.

import 'bootstrap/dist/css/bootstrap.min.css'


import { getJobList } from './api/jobs'

import { renderJobListItem } from './dom/getJobList'

import {renderJobListFiltered} from './dom/getJobList'

// import {filterJobList} from '.api/jobs'

// variables 
let jobList = []
jobList = getJobList()


let jobDetails = document.querySelector("#job-details-card")
let jobListElement = document.querySelector("#searched-jobs")
let jobSearchQuery = document.querySelector("#searched-jobs-form")






// This displays the lisitngs on the page 

document.addEventListener("DOMContentLoaded", async () => {

    let data = await getJobList()
    let jobListElement = document.querySelector("#searched-jobs")
    data.map((job) => {
        renderJobListItem(
            job,
            jobListElement
        )
    })

})


// Search Function

// Adding the event listener for the search 
jobSearchQuery = document.querySelector("#search-jobs-form")
jobSearchQuery.addEventListener("submit", (event) => {

    event.preventDefault()

    let searchQuery = event.target.elements["query"]

    renderJobListFiltered(searchQuery, jobList)
})

jobListElement.addEventListener("click", async (event) => {

    event.preventDefault()

    let searchText = event.target.elements["query"]

    renderJobListFiltered(searchText, jobList)

})


