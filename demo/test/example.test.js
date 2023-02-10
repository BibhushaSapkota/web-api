const{reverse}=require("../example/example.js");

test("reverse of apple" ,()=>{
    const output = reverse("apple")
    expect(output).toBe("elppa")  
})

test("reverse of a" ,()=>{
    const output = reverse("a")
    expect(output).toBe("a")  
})

test("reverse of empty string" ,()=>{
    const output = reverse("")
    expect(output).toBe("")  
})

test("reverse of react" ,()=>{
    const output = reverse("react")
    expect(output).toBe("tcaer")  
})


