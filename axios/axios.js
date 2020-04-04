import axios from "axios";
import {  getResponseStatus } from "./helper";


// Add a request interceptor
axios.interceptors.request.use(function (config) {
	// Do something before request is sent
	let metaTag, csrfTokenInput;
	try{
		if(typeof $ !=="undefined"){
			metaTag = $("meta[name='csrf-token']").attr("content");
			csrfTokenInput = $("[name='csrfmiddlewaretoken']").val();
		}else{
			metaTag = document.querySelector("meta[name='csrf-token']").content;
			csrfTokenInput = document.querySelector("[name='csrfmiddlewaretoken']").value;
		}

	}catch (e) {

	}

	config = {
		...config,
		headers: {
			"X-CSRFToken": metaTag || csrfTokenInput,
			// 'Authorization': 'Bearer sibinaccesstoken',
		}
	};
	return config;
}, function (error) {
	// Do something with request error
	return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
	// Do something with response data
	try{
		if(["PATCH", "PUT", "POST", "DELETE"].indexOf((response.config.method).toUpperCase()) >= 0){
			const { status } = response;
			if(getResponseStatus(status, 400) || getResponseStatus(status, 500)){
				toast.error("Something unexpected happened");
			}
		}
	}catch (e) {
	}
	return response;
}, function (error) {
	if(error){
		const { response } = error;

		if(response && response.status &&  getResponseStatus(response.status, 400)){
			const {	statusText, data: {	detail, details } } = response;
			
		}
	}
	// Do something with response error
	return Promise.reject(error);
});
export  default axios;