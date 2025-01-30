![image](https://github.com/user-attachments/assets/9de12ae1-7e73-42a8-a57a-707002b32c1f)

# DevOps Kubernetes Setup

This project demonstrates how to build a Docker image, push it to Docker Hub, and deploy it using Kubernetes and Minikube.

## Prerequisites

Make sure you have the following installed on your system:

- Docker
- Minikube
- kubectl
- Docker Hub account

## Build and Run the Docker Image

### 1. **Create the Dockerfile**

### 2. **Build the Docker Image**

Run the following command in your terminal:

```bash
docker build -t clone:v1 .
```

This will build the Docker image with the tag `clone:v1`.

### 3. **Run the Docker Image**

To run the Docker image:

```bash
docker run -d -p 5000:5000 clone:v1
```

This will run the container in the background and map port 5000 from the container to port 5000 on your local machine.

### 4. **Login to Docker Hub**

Login to your Docker Hub account:

```bash
docker login -u <dockerhub_username>
```

### 5. **Tag the Image**

Tag your image to upload it to Docker Hub:

```bash
docker tag clone:v1 <dockerhub_username>/clone:v1
```

### 6. **Push the Image to Docker Hub**

Push the image to your Docker Hub repository:

```bash
docker push <dockerhub_username>/clone:v1
```

## Kubernetes Setup

### 1. **Create Kubernetes Directory**

Create a directory for Kubernetes configuration files:

```bash
mkdir k8s
```

Change into the `k8s` directory:

```bash
cd k8s
```

### 2. **Create and Apply Kubernetes Pod**

Create a Kubernetes pod file:

```bash
vim pod.yaml
```


Apply the pod configuration:

```bash
kubectl apply -f pod.yaml
```

### 3. **Create and Apply Kubernetes Deployment**

Create the `deploy.yaml` file:

```bash
vim deploy.yaml
```


Apply the deployment configuration:

```bash
kubectl apply -f deploy.yaml
```

### 4. **Create and Apply Kubernetes Service**

Create the `service.yaml` file:

```bash
vim service.yaml
```



Apply the service configuration:

```bash
kubectl apply -f service.yaml
```

### 5. **Verify the Kubernetes Service**

Check the status of the service:

```bash
kubectl get svc
```

### 6. **Access the Service via Minikube**

To access the service, use the following command to get the URL:

```bash
minikube service clone-service --url
```

This will give you the URL where you can access your service running in Minikube.

## Conclusion

You have now successfully built and pushed a Docker image, and deployed it on a Kubernetes cluster using Minikube. You can modify and scale your deployment as needed. Enjoy working with Docker and Kubernetes!

## Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Kubernetes Documentation](https://kubernetes.io/docs/)
