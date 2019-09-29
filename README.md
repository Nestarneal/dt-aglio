# dt-aglio

## Description

A wrapper for [aglio](https://github.com/danielgtaylor/aglio).

The `md` file constructed with [API Blueprint format 1A](https://github.com/apiaryio/api-blueprint/blob/master/API%20Blueprint%20Specification.md) can be converted into `html` file by [aglio](https://github.com/danielgtaylor/aglio).

I'd like install [aglio](https://github.com/danielgtaylor/aglio) into global and use

```
aglio --theme-variables cyborg --theme-template triple -i index.md -o index.html
```

to convert `index.md` into `index.html`, which may be too verbose to type those parameters.

## Install

```
npm install -g dt-aglio
```

## Example

- Construct `md` file with [API Blueprint format 1A](https://github.com/apiaryio/api-blueprint/blob/master/API%20Blueprint%20Specification.md) format.
- `dt-aglio /path/to/file.md`
  - `file.html` will be generated in `/path/to/` folder.
