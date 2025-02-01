package main

import (
	"errors"
	"fmt"
)

func div(a int, b int) (int, error) {
	if b == 0 {
		return 0, errors.New("Divisor is zero")
	} else {
		return a / b, nil
	}
}
func main() {
	fmt.Println("Hello")

	result, err := div(10, 2)
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println("Result is", result)
	}
}
