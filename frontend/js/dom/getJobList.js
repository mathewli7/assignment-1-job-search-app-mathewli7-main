import { getJobList } from "../api/jobs"

const renderJobListItem = (jobData, element) => {

  
  element.innerHTML += `<li class="job-card card my-1" style="width: 18rem;">
  <div class="card-header">${jobData.company}</div>
  <div class="card-body">
    <h5 class="card-title">${jobData.title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${jobData.location}</h6>
    <h6 class="card-subtitle mb-2 text-body-secondary">${jobData.date_posted}</h6>
    <button class="btn btn-primary view-job-button" job-data-id="${jobData.id}">View Job</button>
  </div>
</li>`
}







// export that function
export { renderJobListItem }


const displayFilteredJobs = (searchText, jobList) => {
  let jobListElement = document.querySelector("#searched-jobs")

  jobListElement.innerHTML = ""


  jobList.then(jobListArray => {

    let jobListFlitered = jobListArray.filter(jobDataItems => {

      let jobTitleLowercase = jobDataItems.title.toLowerCase()
      let jobDescriptionLowercase = jobDataItems.description.toLowerCase()
      let searchTextLowercase = searchText.value.toLowerCase()

      return jobTitleLowercase.includes(searchTextLowercase) || jobDescriptionLowercase.includes(searchTextLowercase)
    })
  })
}
