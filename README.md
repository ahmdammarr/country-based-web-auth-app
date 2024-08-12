

## Useful Commands
This is country based auth web app to domenstrate how
to implemnt and secure a web app

The security implementation here rely on server side session and server side calls instead if saving sensetive data on the client browser we have a server session for each user.

### Run development server

```bash
# Start development server
yarn dev
```

### Build app in .next folder

```bash
yarn build
```

### Build app in .next folder

```bash
yarn test
```

### Run test coverage on watch mood

```bash
yarn test:watch
```

### Run test coverage on watch mood

```bash
yarn lint
```

## Technology and Tools:

- [NextJs](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [JEST](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/)

## File structure

<details>
  <summary>root</summary>
  <ul>
    <div>
      <details>
        <summary>src</summary>
        <ul>
          <details>
            <summary> app</summary>
            <ul>
              <details>
                <summary>(features)</summary>
                <ul>
                  <details>
                    <summary>feature-x</summary>
                    <p>
                      <details>
                        <summary>__test__</summary>
                      </details>
                    </p>
                    <p>
                      <details>
                        <summary>components</summary>
                        <p>
                          <details>
                            <summary>__test__</summary>
                          </details>
                        </p>
                        <p>
                          <details>
                            <summary>
                             componentWrapper
                            </summary>
                            <p>
                               componentWrapper.tsx
                            </p>
                            <p>helpers.ts</p>
                          </details>
                        </p>
                        <p>
                          <details>
                            <summary>hooks</summary>
                          </details>
                        </p>
                      </details>
                    </p>
                  </details>
                </ul>
                <ul>
                  <details>
                    <summary>-----> feature-y</summary>
                    <p>
                      <details>
                        <summary>----------> __test__</summary>
                      </details>
                    </p>
                    <p>
                      <details>
                        <summary>----------> components</summary>
                        <p>
                          <details>
                            <summary>----------------> __test__</summary>
                          </details>
                        </p>
                        <p>
                          <details>
                            <summary>
                              ----------------> componentWrapper
                            </summary>
                            <p>
                              ---------------------------> componentWrapper.tsx
                            </p>
                            <p>---------------------------> helpers.ts</p>
                          </details>
                        </p>
                        <p>
                          <details>
                            <summary>----------------> hooks</summary>
                          </details>
                        </p>
                      </details>
                    </p>
                  </details>
                </ul>
              </details>
            </ul>
          </details>
          <details>
            <summary>components</summary>
            <ul>
              <details>
                <summary>ui</summary>
                <ul>
                  <details>
                    <summary>components</summary>
                    <p>
                      <details>
                        <summary>__test__</summary>
                      </details>
                    </p>
                    <p>component.tsx</p>
                    <p>.helpers.ts</p>
                    <p>.types.ts</p>
                  </details>
                </ul>
              </details>
            </ul>
          </details>
          <details>
            <summary>utils</summary>
            <p>
              <details>
                <summary>__test__</summary>
              </details>
            </p>
            <p>...utils files</p>
          </details>
        </ul>
      </details>
      <p>-> ..... config files</p>
    </div>
  </ul>
</details>


## Environment Variables

```
# Env variables to be added here
ENDPOINT=
#NEXTAUTH
NEXTAUTH_URL=
NEXTAUTH_SECRET=

```
