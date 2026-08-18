# Build

#### 1. Clone the Spacefox repository

```sh
git clone git@github.com:friesliam/spacefox.git
cd spacefox
```


#### 2. Clone the Firefox release

To clone the Firefox release that Spacefox currently uses, run the following:
```sh
./spacefox clone
```

To clone a custom Firefox release by tag, use:
> Conflicting patch files will need to be resolved manually if using a custom release
```sh
./spacefox clone --tag <TAG>
```


#### 3. Bootstrap your system

This step can likely be skipped if it has been run before on this system.
```sh
./spacefox bootstrap
```


#### 4. Build

```sh
./spacefox build --full
```



# Run
Use the following to run the browser:
```sh
./spacefox run
```



# Incremental Builds

#### Modifications to <u>only</u> frontend code

Use when changes only require rebuilding frontend code such as HTML, CSS, JS, JSX, Fluent, etc.
```sh
./spacefox build faster
```


#### Modifications to backend code

Use when changes require rebuilding backend code such as C++, C, Rust, etc.
```sh
./spacefox build
```


#### Mozconfig modifications

Use if any mozconfig files were changed.
```sh
./spacefox configure
./spacefox build
```

#### Modifications to spacefox/src
Use to copy all contents from `spacefox/src` into the active Firefox source directory.
```sh
./spacefox copysrc
```
Then run the appropriate build command depending on what was changed.
