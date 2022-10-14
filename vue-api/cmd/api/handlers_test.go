package main

import (
	"net/http"
	"net/http/httptest"
	"testing"
	"time"
)

func TestApplication_AllUsers(t *testing.T) {
	//	mock rows
	var mockedRows = mockedDB.NewRows([]string{"id", "email", "first_name", "last_name", "password", "user_active", "created_at", "updated_at", "has_token"})
	mockedRows.AddRow("1", "me@here.com", "Jack", "Smith", "abc123", "1", time.Now(), time.Now(), "1")
	//what we expect
	mockedDB.ExpectQuery("select \\\\* ").WillReturnRows(mockedRows)

	rr := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/admin/users", nil)
	handler := http.HandlerFunc(testApp.AllUsers)
	handler.ServeHTTP(rr, req)

	if rr.Code != http.StatusOK {
		t.Error("AllUsers returned wrong status code of", rr.Code)
	}

}
