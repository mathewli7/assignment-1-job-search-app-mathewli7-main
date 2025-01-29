// your code goes here.

import 'bootstrap/dist/css/bootstrap.min.css'


import { getJobList } from './api/jobs'

import { renderJobListItem } from './dom/getJobList'

let viewJobClick = document.querySelector("#job-details-card")
let jobSearch = document.querySelector("#searched-jobs")

jobSearch.addEventListener("submit", (event) => {
    let searchInput = searchForm.elements["search"]
    console.log(searchInput.value)
})




document.addEventListener("DOMContentLoaded", async () => {

    let data = await getJobList()
    let jobListElement = document.querySelector("#searched-jobs")
    data.map((job) => {
        renderJobListItem(
            job,
            jobListElement
        )
    })

    // Add event listener
    let viewJob = document.querySelector(".view-job-button")
    viewJob.addEventListener("click", (event) => {
        event.preventDefault
        console.log("click")
        // confirmed class was targeted

        if(viewJobClick === "View Job") {
                event.target.innerText
                
        }



        // let data = await getJobList()
        // data.map((dataID) => {

        // })

    })
})